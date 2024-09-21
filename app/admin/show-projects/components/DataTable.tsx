"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/myComponents/Loader";
import { useToast } from "@/hooks/use-toast"; // Assuming you have a toast hook for notifications
import { useState } from "react";
import { Spinner } from "flowbite-react";

export function DataTable() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // Fetch all designs
  const {
    data: allDesigns,
    isLoading,
    isError,
  } = useQuery<any>({
    queryKey: ["ALLDESIGNS"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/v1/design`
      );
      return data;
    },
  });

  // Mutation to delete design
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/v1/design/${id}`
      );
    },
    onSuccess: () => {
      toast({ title: "Design deleted successfully" });
      queryClient.invalidateQueries({
        queryKey: ["ALLDESIGNS"], // Refetch designs by query key array
      });
      setIsDeleting(false);
    },
    onError: () => {
      toast({
        title: "Error deleting design",
        variant: "destructive",
      });
      setIsDeleting(false);
    },
  });

  // Delete handler
  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this design?")) {
      deleteMutation.mutate(id);
    }
    setIsDeleting(true);
  };

  if (isLoading) return <Loader />;
  if (isError) return <p>Error fetching designs.</p>;

  return (
    <Table className="border rounded-lg">
      <TableCaption>Manage all available projects in database.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Height</TableHead>
          <TableHead>Width</TableHead>
          <TableHead>Area</TableHead>
          <TableHead>Bathrooms</TableHead>
          <TableHead>Bedrooms</TableHead>
          <TableHead>Creator</TableHead>
          <TableHead>Popular</TableHead>
          <TableHead>Update</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allDesigns?.allListings?.map((item: any, i: number) => (
          <TableRow key={i}>
            <TableCell>{i + 1}</TableCell>
            <TableCell>{item.designTitle}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.location}</TableCell>
            <TableCell>{item.heightInFeet}</TableCell>
            <TableCell>{item.widthInFeet}</TableCell>
            <TableCell>{item.areaInSquareFeet}</TableCell>
            <TableCell>{item.noOfBathRooms}</TableCell>
            <TableCell>{item.noOfBedRooms}</TableCell>
            <TableCell>{item.architectName}</TableCell>
            <TableCell>{item.popular === "true" ? "Yes" : "No"}</TableCell>
            <TableCell>
              <Button variant={"outline"}>
                <ModeEditIcon className="text-blue-900" />
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant={"outline"}
                onClick={() => handleDelete(item._id)} // Pass the item's id to the delete handler
              >
                {isDeleting &&
                (deleteMutation.variables === item._id) === true ? (
                  <Spinner
                    color="failure"
                    aria-label="Failure spinner example"
                  />
                ) : (
                  <DeleteIcon className="text-red-600" />
                )}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
