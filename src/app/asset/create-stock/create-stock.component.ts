import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss'],
  providers:[MessageService]
})
export class CreateStockComponent implements OnInit 
  {
    public stockForm: FormGroup;

    constructor(fb: FormBuilder,public messageService: MessageService) {
        this.stockForm = fb.group({
            stockName: ["", Validators.required],
            stockCode: new FormControl("", Validators.required),
        });

    }
  ngOnInit(): void {

  }

    public onSubmit() {
       if(this.stockForm.valid)
       {
         this.messageService.message = "Successfully created stock with stock code: "+
         this.stockForm.get("stockCode").value;
       }
    }
}