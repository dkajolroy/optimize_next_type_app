import type { NextApiRequest, NextApiResponse } from 'next'

type ResData={
    name: string,
    role:number,
    class:number,
    isAdmin: boolean
}
    const  get=(
    req: NextApiRequest,
        res:NextApiResponse<ResData>
    )=>{
        const data ={name:"Kajol", role:21,class:14,isAdmin:false}
        res.status(200).send(data)
    }
export default get