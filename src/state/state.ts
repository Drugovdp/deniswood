import { v1 } from 'uuid'

// import charisma1 from '../images/84362446.jpg'
// import charisma2 from '../images/14824930.jpg'
// import platon1 from '../images/43491821.jpg'
// import platon2 from '../images/52164297.jpg'
// import standart1 from '../images/71064608.jpg'
// import standart2 from '../images/95915266.jpg'
// import grand1 from '../images/13047235.jpg'
// import grand2 from '../images/39965545.jpg'
// import round1 from '../images/62780161.jpg'
// import round2 from '../images/97069290.jpg'
// import fashen1 from '../images/12417125.jpg'
// import fashen2 from '../images/75537949.jpg'
import charisma1 from '../images/table_1.jpg'
import charisma2 from '../images/table_2.jpg'
import platon1 from '../images/table_2.jpg'
import platon2 from '../images/table_4.jpg'
import standart1 from '../images/table_13.jpg'
import standart2 from '../images/table_14.jpg'
import grand1 from '../images/13047235.jpg'
import grand2 from '../images/39965545.jpg'
import round1 from '../images/62780161.jpg'
import round2 from '../images/97069290.jpg'
import fashen1 from '../images/12417125.jpg'
import fashen2 from '../images/75537949.jpg'

export type TypeUseTable = 'all' | 'dinner' | 'magazine' | 'workers' | 'other'

export type TypeCatalog = {
    id: string
    name: string
    imgFoto: Array<string>
    prise: number
    size: string
    thickness: string
    use: TypeUseTable
}

export const catalog: TypeCatalog[] = [
    {
        id: v1(),
        name: 'Харизма',
        imgFoto: [charisma1, charisma2],
        prise: 300000,
        size: '2200x1000mm',
        thickness: '50mm',
        use: 'dinner'
    },
    {
        id: v1(),
        name: 'Платон',
        imgFoto: [platon1, platon2],
        prise: 195000,
        size: '2200x900mm',
        thickness: '50mm',
        use: 'other'
    },
    {
        id: v1(),
        name: 'Стандарт',
        imgFoto: [standart1, standart2],
        prise: 100000,
        size: '1300x800mm',
        thickness: '50mm',
        use: 'magazine'
    },
    {
        id: v1(),
        name: 'Гранд',
        imgFoto: [grand1, grand2],
        prise: 395000,
        size: '2900х1200mm',
        thickness: '50mm',
        use: 'workers'
    },
    {
        id: v1(),
        name: 'Кругляш',
        imgFoto: [round1, round2],
        prise: 248000,
        size: '2000x2000mm',
        thickness: '50mm',
        use: 'workers'
    },
    {
        id: v1(),
        name: 'Фэшен',
        imgFoto: [fashen1, fashen2],
        prise: 310000,
        size: '2000x1000mm',
        thickness: '50mm',
        use: 'dinner'
    },
] 