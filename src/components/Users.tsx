import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Separator } from "./ui/separator";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
// import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";


const Users = () => {
    const { theme } = useTheme()

    const [users, setUsers] = useState([]);





    const getUsers = async () => {

        try {

            const response = await fetch('/api/user')
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



    const handleRole = async( id : string ,  role : string) => {
         
              try {
                  
                    const response = await fetch("/api/edit" ,{
                        method: "PUT",
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ id ,role }),
                      });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                console.log("Role changed successfully");
                    

              } catch (error) {
                 
                console.log(error);
              }

    }

    const handleDelete = async(id : string) =>{
           
        try {
            const response = await fetch(`/api/user`, {
              method: "DELETE",
              headers: {
                'Content-Type': 'application/json',
              },
              body : JSON.stringify({id})
            });
      
            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.error || "Failed to delete user");
            }
      
            const data = await response.json();
            console.log(data.id);
            
          
          } catch (error: unknown) {
            if (error instanceof Error) {
              console.log(error.message)
            } else {
              console.log("An unexpected error occurred.");
              
            }
          }
            
    }


    return (
        <div className={cn(`bg-slate-900 w-full m-5 rounded-xl`, { 'bg-slate-200': theme === 'light' })} >
        
                <div>

                    <Table className="w-full p-10">
                        <TableCaption>A list of all users.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">User</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Edit</TableHead>
                                <TableHead>Delete</TableHead>
                                <TableHead className="text-right">Role</TableHead>
                            </TableRow>
                            <Separator className="text-slate-700" />
                        </TableHeader>

                        <TableBody>
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell className="font-medium">{user.name}</TableCell>
                                        <TableCell className={user ? "text-green-600" : "text-red-600"}>
                                            {user ? "Active" : "Inactive"}
                                        </TableCell>
                                        <TableCell >
                                            <Button className="px-1 py-[-1] text-green-500" >Edit</Button>
                                        </TableCell>
                                        <TableCell >
                                            <Button className="px-1 py-[-1] text-red-500 " onClick={ () => handleDelete(user.id)}>Delete</Button>
                                        </TableCell>
                                        
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger>{user.role}</DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuLabel>Assign Role</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem onClick={ () => handleRole(user.id ,"user")} >User</DropdownMenuItem>
                                                    <DropdownMenuItem onClick={ () => handleRole(user.id ,"admin")}>Admin</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={3} className="text-center">
                                        <Loader2 className=" text-green-500 text-center animate-spin w-5 h-5" />
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                    {/* <Pagination>
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
</Pagination> */}
                </div>

            



        </div>
    )
}

export default Users;