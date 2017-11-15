import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';
  showUpdate = false;
  tempObj = false;
  dummyData = [{  
	   "name":"Alex",
	   "age":"22",
	   "location":"pune"
	},{  
	   "name":"John",
	   "age":"11",
	   "location":"goa"
	},{  
	   "name":"Noman",
	   "age":"34",
	   "location":"Raipur"
	},{  
	   "name":"Rakesh",
	   "age":"25",
	   "location":"Rigadh"
	},{  
	   "name":"Olks",
	   "age":"54",
	   "location":"Nima"
	},{  
	   "name":"Olex",
	   "age":"12",
	   "location":"Pune"
	},{  
	   "name":"Raju",
	   "age":"23",
	   "location":"Nagpur"
	},{  
	   "name":"Rajesh",
	   "age":"21",
	   "location":"Jaipur"
	}
  ];

  remove = function(obj){
  		this.dummyData = this.dummyData.filter(item => item !== obj);
  };

  add = function() {
		this.dummyData.push({  
		   "name":this.nameModel,
		   "age":this.ageModel,
		   "location":this.locModel
		});
		this.locModel = "";
		this.nameModel = "";
		this.ageModel = "";
  };

  edit = function(obj){
  		this.tempObj = obj;
  		if(this.showUpdate){
  			alert("Please update selected first !!");
  			return false;
  		}
  		this.showUpdate = true;
  		this.nameUpdateModel = obj.name;
  		this.ageUpdateModel = obj.age;
  		this.locUpdateModel = obj.location;
  		this.dummyData = this.dummyData.filter(item => item !== obj);
  };

  update = function(){
  		this.dummyData.push({  
		   "name":this.nameUpdateModel,
		   "age":this.ageUpdateModel,
		   "location":this.locUpdateModel
		});
		this.nameUpdateModel = "";
		this.ageUpdateModel = "";
		this.locUpdateModel = "";
		this.showUpdate = false;
  	};


  updateCancel = function(){
  		this.dummyData.push(this.tempObj);
  		this.showUpdate = false;
  		this.nameUpdateModel = "";
		this.ageUpdateModel = "";
		this.locUpdateModel = "";
  };

  };


}
