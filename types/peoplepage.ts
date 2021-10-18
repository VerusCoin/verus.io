export interface IPeopleJSON {
  leads: ILeads[]
  support: IPers[]
}

export interface ILeads {
  per: string
  linkedIn?: string
  twitter?: string
}

export interface IPers {
  per: string
}
