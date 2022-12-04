import React from 'react'
import Image from 'next/image';
import {InferGetStaticPropsType} from 'next';

export default function index({category}:InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <div>
    
      {
        category.map((x,i)=>(
          <Image 
          height={100}
          width={100}
          key={i}
          loading="lazy"
          alt="cover"
        src={x.cover} />
        
        ))
      }
      
    </div>
  )
}

type catData ={
  _id:string,
  title:string,
  name:string,
  cover:string,
  position:number,
  createdBy:string,
  _v:number
}
export const getStaticProps=async()=>{
  const res = await fetch("https://admin.babue.me/category")
  const category:catData[] = await res.json()

  return{
    props:{
      category
    }
  }
}