export class Vendor {
  id: number | string;
  name: string;
  description: string;
  phoneNumber: string | null;
  whatsapp: string | null;
  image: string;

  constructor(id:number | string, name: string, description: string, phoneNumber: string | null, whatsapp: string | null, image: string){
    this.id = id;
    this.name = name;
    this.description = description;
    this.phoneNumber = phoneNumber;
    this.whatsapp = whatsapp;
    this.image = image;
  }

}
