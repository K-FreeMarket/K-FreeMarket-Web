export interface DaumPostcodeData {
  address: string
  addressType: 'J' | 'R'
  bname: string
  buildingName: string
  zonecode: string
}

declare global {
  interface Window {
    daum?: {
      Postcode: new (options: { oncomplete: (data: DaumPostcodeData) => void }) => { open(): void }
    }
  }
}

export {}
