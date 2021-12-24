import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SendDataService } from '../Services/send-data.service';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.css']
})
export class FirstScreenComponent implements OnInit {
mygroup:FormGroup
data1:FormData=new FormData()
  constructor(private service:SendDataService,private router:Router) { 
    this.mygroup=new FormGroup({
      "file":new FormControl(null)
    })
    
  }
  handleFileInput(files: Event) {
    var file=files.target as HTMLInputElement
    var filetoupload:File = (file.files as FileList)[0];
    this.data1.append('file',filetoupload)
}
  public get file():any{
    return this.mygroup.get("file")
  }
  onSubmit(){
    this.router.navigate(["login"])  
     this.service.SendFile(this.data1).subscribe((data)=>{
       console.log(data)
     })
  }
  ngOnInit(): void {
  }



}
