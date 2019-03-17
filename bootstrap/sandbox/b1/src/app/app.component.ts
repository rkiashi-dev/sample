import { OnInit, Component } from '@angular/core';

declare function $ ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'b1';

  ngOnInit() {

    $(function () {
  $('[data-toggle="popover"]').popover({
    html: true,
    trigger: 'click',
    content: $('#cc')
});

 $('#bb').on('show.bs.popover',function(){
   console.log("BBBB") ;
   $('#cc').css( 'display', 'inherit' );
   console.log( $('#cc') ) ;
}) ; 

})



  }

 click() {
   alert('a');
 }
  
}
