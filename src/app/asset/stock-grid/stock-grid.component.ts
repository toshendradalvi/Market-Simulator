import { Component, OnInit } from '@angular/core';
import {
  IgxGridCellComponent,
  IgxGridRowComponent
} from "igniteui-angular";
import { Stock } from 'src/app/model/Stock';
import { StockService } from 'src/app/services/stock.service';
import { IgxRow } from "igniteui-angular/lib/grids/selection/selection.service";

@Component({
  selector: 'app-stock-grid',
  templateUrl: './stock-grid.component.html',
  styleUrls: ['./stock-grid.component.scss']
})
export class StockGridComponent implements OnInit {

  stocks:Array<Stock> = new Array<Stock>();
  constructor(private stockService:StockService) {
    this.stocks = stockService.getStocks();
   }

  ngOnInit(): void {
  }

  public toggleFavourite(cell: IgxGridCellComponent) {
    cell.update(!cell.value);
  //  var row:IgxGridRowComponent = cell.row;
  //  row.cells.forEach(function(cell: IgxGridCellComponent) {
 //     if (cell.column.field === "previousPrice") {
   //     cell.update(cell.value + 1);
   //   }
   // });
  }

}
