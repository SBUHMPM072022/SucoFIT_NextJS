import { useParams } from 'next/navigation'; 
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
"use client"

interface User {
    id: string;
    name: string;
    division: string;
    joinDate: string;
    duration: string;
    loc: string;
    evidence: string;
}
  
const userData: User[] = [
    {
      id: "1",
      name: "Fikri Ahsanandi",
      division: "HMPM",
      joinDate: "10 August 2024",
      duration: "100 minutes",
      loc: "Valid",
      evidence: "valid"
    },
    {
      id: "2",
      name: "Ivan Fabriano Syahputra",
      division: "HMPM",
      joinDate: "10 August 2024",
      duration: "90 minutes",
      loc: "Non Valid",
      evidence: "NULL"
    },
    {
      id: "3",
      name: "Mba Dillah",
      division: "HMPM",
      joinDate: "9 August 2024",
      duration: "100 minutes",
      loc: "Valid",
      evidence: "valid"
    },
    {
      id: "4",
      name: "Mas Iqbal",
      division: "HMPM",
      joinDate: "8 August 2024",
      duration: "120 minutes",
      loc: "Valid",
      evidence: "valid"
    },
    {
      id: "5",
      name: "Mas Iqbal",
      division: "HMPM",
      joinDate: "8 August 2024",
      duration: "120 minutes",
      loc: "Non Valid",
      evidence: "NULL"
    },
    {
      id: "6",
      name: "Mas Iqbal",
      division: "HMPM",
      joinDate: "8 August 2024",
      duration: "120 minutes",
      loc: "Non Valid",
      evidence: "NULL"
    },
    {
      id: "7",
      name: "Mas Iqbal",
      division: "HMPM",
      joinDate: "8 August 2024",
      duration: "120 minutes",
      loc: "valid",
      evidence: "valid"
    },
    {
      id: "8",
      name: "Mas Iqbal",
      division: "HMPM",
      joinDate: "8 August 2024",
      duration: "120 minutes",
      loc: "valid",
      evidence: "valid"
    },
    {
      id: "9",
      name: "Mas Iqbal",
      division: "HMPM",
      joinDate: "8 August 2024",
      duration: "120 minutes",
      loc: "Non Valid",
      evidence: "NULL"
    },
    {
      id: "10",
      name: "Mas Iqbal",
      division: "HMPM",
      joinDate: "8 August 2024",
      duration: "120 minutes",
      loc: "valid",
      evidence: "valid"
    },
  ]

const userEvidence = () => {
    const { id } = useParams();
  
    const [evidence, setEvidence] = useState<User | undefined>();
  
    useEffect(() => {
      if (id) {
        const foundEvidence = userData.find((evidence) => evidence.id === id);
        setEvidence(foundEvidence);
      }
    }, [id]);
  
    if (!evidence) {
      return <p>Evidence not found</p>;
    }
    
    const router = useRouter();

    return(
        <h1>heeeee</h1>
    )
}