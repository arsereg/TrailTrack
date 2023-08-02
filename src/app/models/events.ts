export class Events {
  id: number | string;
  title: string;
  subtitle: string;
  description: string;
  eventDate: string;
  phone: string | null;
  contactLink: string | null;
  imageUrl: string;

  constructor(id: number | string, title: string, subtitle: string, description: string, eventDate: string, phone: string | null, contactLink: string | null, imageUrl: string) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.eventDate = eventDate;
    this.phone = phone;
    this.contactLink = contactLink;
    this.imageUrl = imageUrl;
  }
}
