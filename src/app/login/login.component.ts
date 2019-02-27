import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  term:any;
  constructor() { }
 r:any;
  ngOnInit() {
   
    // for (var input = 1; input <= 1; input++) {
      
    // //setTimeout(() => console.log(input),1000);
    //   setTimeout(function(){
    //     for(var j=1;j<=10;j++){
         
    //       console.log(j);
    //     }
        
    //   },input*2000)
    //   var count=input++;
    //  }



    for(var i = 0; i <= 100; i++){
     r(i);
     
  }
  function r(i){
      setTimeout(function(){
        document.write(" "+ i);
      },i*1000);
  }
 
 
  }

}
