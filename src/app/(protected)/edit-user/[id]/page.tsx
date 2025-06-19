'use client'
import { useParams } from "next/navigation";
import { EditUserScreen } from "../../../../screens/EditUser";

export default function EditUserPage() {

  const params = useParams()
  const id = Number(params.id ?? 0)
  
  return (
    <EditUserScreen id={id}/>
  )
}