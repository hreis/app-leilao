import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Bid } from '../model/bid';
import { AdminLeilaoService } from '../services/admin-leilao.service';
import * as _ from 'lodash';
import { MatDialog } from '@angular/material/dialog';
import { WinnerDialogComponent } from 'src/app/shared/components/dialog/winner-dialog/page/winner-dialog.component';

@Component({
  selector: 'app-admin-leilao',
  templateUrl: './admin-leilao.component.html',
  styleUrls: ['./admin-leilao.component.scss']
})
export class AdminLeilaoComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dsBid: MatTableDataSource<Bid>;
  bids: Bid[];

  bids$: Observable<Bid[]>;

  displayedColumns: string[] = [
    'id_bid',
    'username',
    'bid',
    'date_bid',
  ];

  constructor(private adminLeilaoService: AdminLeilaoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBids();
  }

  getBids() {
    this.bids$ = this.adminLeilaoService.getBids().pipe(tap(bids => {
      this.bids = bids;
      setTimeout(() => this.dsBid.paginator = this.paginator);
      setTimeout(() => this.dsBid.sort = this.sort);
      this.dsBid = new MatTableDataSource<Bid>(bids);
    }));
  }

  getWinner() {

    let collection = this.getCollection(this.bids.length);

    this.getUniques().forEach((e) => {
      if (this.checkIfItIsNotUniqueBid(e.bid)) this.removeBidFromArray(e.bid);
    });

    this.openDialog(this.getMinUniqueValue(), collection);

  }

  getMinUniqueValue(): Bid | undefined {
    return _.minBy(this.bids, 'bid');
  }

  removeBidFromArray(bid: number) {
    this.bids = this.bids.filter(x => x.bid != bid);
  }

  checkIfItIsNotUniqueBid(bid: number): boolean {
    return this.bids.filter(x => x.bid === bid).length > 1;
  }

  getUniques(): Bid[] {
    return _.uniqBy(this.bids, 'bid');
  }

  arrayRemove(arr: Bid[], value: any) {

    return arr.filter(x => x.bid != value);
  }

  getCollection(totalBids: number): number {
    return totalBids * 0.98;
  }

  openDialog(bid: Bid | undefined, collection: number) {
    const dialogRef = this.dialog.open(WinnerDialogComponent, {
      data: { bid, collection },

    });
  }


}
