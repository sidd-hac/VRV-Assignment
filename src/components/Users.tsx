import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Separator } from "./ui/separator";
import { Loader2 } from "lucide-react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";


const Users = () => {
    const {theme} = useTheme()

    const [users, setUsers] = useState([]);
    


    const getUsers = async () => {

        try {

            const response = await fetch('https://674a0b7b8680202966338398.mockapi.io/users')
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const users = await response.json();
            setUsers(users);
            console.log(users);

        } catch (error) {
            console.log(error);


        }
    }

    useEffect(() => {
        getUsers();
    }, [])





    return (
        <div className={cn(`bg-slate-900 w-full m-5 rounded-xl` , {'bg-slate-200' : theme === 'light'})} >
  {users ? (
    <div>

     <Table className="w-full p-10">
     <TableCaption>A list of all users.</TableCaption>
     <TableHeader>
         <TableRow>
             <TableHead className="w-[100px]">User</TableHead>
             <TableHead>Status</TableHead>
             <TableHead className="text-right">Role</TableHead>
         </TableRow>
         <Separator className="text-slate-700" />
     </TableHeader>
     
     <TableBody>
         {users.length > 0 ? (
             users.map((user) => (
                 <TableRow key={user.id}>
                     <TableCell className="font-medium">{user.name}</TableCell>
                     <TableCell className={user  ? "text-green-600" : "text-red-600"}>
                         {user ? "Active" : "Inactive"}
                     </TableCell>
                     <TableCell className="text-right">
                         <DropdownMenu>
                             <DropdownMenuTrigger>{ "User"}</DropdownMenuTrigger>
                             <DropdownMenuContent>
                                 <DropdownMenuLabel>Assign Role</DropdownMenuLabel>
                                 <DropdownMenuSeparator />
                                 <DropdownMenuItem>User</DropdownMenuItem>
                                 <DropdownMenuItem>Admin</DropdownMenuItem>
                             </DropdownMenuContent>
                         </DropdownMenu>
                     </TableCell>
                 </TableRow>
             ))
         ) : (
             <TableRow>
                 <TableCell colSpan={3} className="text-center">
                     No users found.
                 </TableCell>
             </TableRow>
         )}
     </TableBody>
 </Table>
 <Pagination>
 <PaginationContent>
   <PaginationItem>
     <PaginationPrevious href="#" />
   </PaginationItem>
   <PaginationItem>
     <PaginationLink href="#">1</PaginationLink>
   </PaginationItem>
   <PaginationItem>
     <PaginationEllipsis />
   </PaginationItem>
   <PaginationItem>
     <PaginationNext href="#" />
   </PaginationItem>
 </PaginationContent>
</Pagination>
    </div>

  ) : <Loader2 className="animate-spin w-10 h-10" />}
           


        </div>
    )
}

export default Users;