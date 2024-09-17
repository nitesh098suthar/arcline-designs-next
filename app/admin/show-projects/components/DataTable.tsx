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
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/myComponents/Loader";
export function DataTable() {
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
            <TableCell>{item.popular ? "Yes" : "No"}</TableCell>
            <TableCell>
              <Button variant={"outline"}>
                <ModeEditIcon className="text-blue-900" />
              </Button>
            </TableCell>
            <TableCell>
              <Button variant={"outline"}>
                <DeleteIcon className="text-red-600" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
