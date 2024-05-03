export interface ReferenceType {
  value: string,
  name?: string
}

export interface Address {
  Id: string,
  PostalCode?: string,
  City?: string,
  Country?: string,
  Line5?: string,
  Line4?: string,
  Line3?: string,
  Line2?: string,
  Line1?: string,
  Lat?: string,
  Long?: string,
  CountrySubDivisionCode?: string
}