import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div>
      <h2>Chamath</h2>
      <Button>click me</Button>

      <UserButton/>
      
    </div>
  );
}