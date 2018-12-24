

export class PageRequest {
  public page: number;
  public order: string;
  public  dir: string;
  totalElements: number;
  size: number;

  constructor(page: number, order: string, dir: string, totalElements: number, size: number){
    this.page = page;
    this.order = order;
    this.dir = dir;
    this.totalElements = totalElements;
    this.size = size;
  }
}
