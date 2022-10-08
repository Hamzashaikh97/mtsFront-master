import {Injectable, PipeTransform} from '@angular/core';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import {MTSunReleaseReportData} from './types';
import {MTSUNRELEASEREPORTDATA} from './memberData';
import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import {SortColumn, SortDirection} from './sortable.directive';

interface SearchResult {
  MTSunReleasesReportData: MTSunReleaseReportData[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(MTSunReleasesReportData: MTSunReleaseReportData[], column: SortColumn, direction: string): MTSunReleaseReportData[] {
  if (direction === '' || column === '') {
    return MTSunReleasesReportData;
  } else {
    return [...MTSunReleasesReportData].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(MarginData: MTSunReleaseReportData, term: string, pipe: PipeTransform) {
  return MarginData.MemberName.toLowerCase().includes(term.toLowerCase())
    || pipe.transform(MarginData.MemberCode).includes(term)
    || pipe.transform(MarginData.Date).includes(term)
    || pipe.transform(MarginData.Symbol).includes(term)
    || pipe.transform(MarginData.UIN).includes(term)
    || pipe.transform(MarginData.MarketMargin).includes(term)
    || pipe.transform(MarginData.MemberMargin).includes(term)
    || pipe.transform(MarginData.UINMargin).includes(term)
    || pipe.transform(MarginData.TotalMargin).includes(term)
    
    ;
}

@Injectable({providedIn: 'root'})
export class MemberDataService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private MTSunReleasesReportData$ = new BehaviorSubject<MTSunReleaseReportData[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 8,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this.MTSunReleasesReportData$.next(result.MTSunReleasesReportData);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get MTSunReleaseReportData$() { return this.MTSunReleasesReportData$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: SortColumn) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let MTSunReleasesReportData = sort(MTSUNRELEASEREPORTDATA, sortColumn, sortDirection);

    // 2. filter
    MTSunReleasesReportData = MTSunReleasesReportData.filter(MarginData => matches(MarginData, searchTerm, this.pipe));
    const total = MTSunReleasesReportData.length;

    // 3. paginate
    MTSunReleasesReportData = MTSunReleasesReportData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({MTSunReleasesReportData, total});
  }
}