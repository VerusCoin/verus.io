//Standard JSON data Types
import { IJumbotron } from '@/types/molecules'

export type CreateWithVerusProps = {
  data: {
    JumbotronJSON: IJumbotron
    StartAProjectJSON: IStartAProject
    SelfSovereignJSON: ISovereign
    DefiSovereignJSON: ISovereign
  }
}

//Sections specifically associated with page
export interface IStartAProjectItem {
  svgName: string
  net: string
  service: string
  header: string
  text: string
  question?: string
}

export interface IStartAProject {
  header: {
    title: string
    text: string
  }
  data: IStartAProjectItem[]
  closing: {
    header: string
    text: string
  }
  button?: {
    href: string
    text: string
  }
}

export interface ISovereign {
  color: string
  header: {
    svg: string
    net: string
    netID: string
    title: string
  }
  singleData: {
    svg: string
    title: string
    text?: string
  }

  data: ISovereignItem[]
  closing?: string
}

export interface ISovereignItem {
  svg?: string
  didYouKnow?: boolean
  title?: string
  text?: string
  text2?: string
}
