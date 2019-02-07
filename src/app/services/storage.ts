export class Storage {   
  
  $key: string;
  file:File;
  name:string;
  url:string;
  progress:number;
  tipo:string;
  fmapa:string;
 

  createdAt: Date = new Date();

  constructor(file:File) {
    this.file = file;
  }

}
