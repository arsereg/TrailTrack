export class Vendor {
  id: number | string;
  name: string;
  service: string;
  phone: string | null;
  contactLink: string | null;
  imageUrl: string;
  description: string | null;
  direction: string | null;

  constructor(id:number | string, name: string, service: string, phone: string | null, contactLink: string | null, imageUrl: string, description: string | null, direction: string | null){
    this.id = id;
    this.name = name;
    this.service = service;
    this.phone = phone;
    this.contactLink = contactLink;
    this.imageUrl = imageUrl;
    this.description = description;
    this.direction = direction;
  }

}
