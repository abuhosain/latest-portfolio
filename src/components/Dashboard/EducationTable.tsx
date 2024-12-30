/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDeleteJourney } from "../../hooks/journey.hook";

interface EducationTableProps {
  educations: any;
  setEducations: React.Dispatch<React.SetStateAction<any[]>>;  
  isLoading: boolean;
}

const EducationTable = ({
  educations,
  setEducations,
  isLoading,
}: EducationTableProps) => {
  const { mutate: deleteEducation } = useDeleteJourney();
  const [deletingId, setDeletingId] = useState<string | null>(null); // Handle deleting state for each recipe

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this experience?")) {
      try {
        setDeletingId(id);
        await deleteEducation(id);
        toast.success("Experince deleted successfully!");

        setEducations((preveucation) =>
          preveucation.filter((eucation) => eucation.id !== id)
        );
      } catch (error) {
        toast.error("Failed to delete the experience.");
      } finally {
        setDeletingId(null);
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 text-left font-semibold text-gray-700">
              Image
            </th>
            <th className="py-2 px-4 text-left font-semibold text-gray-700">
              Company
            </th>
            <th className="py-2 px-4 text-left font-semibold text-gray-700">
              Position
            </th>

            <th className="py-2 px-4 text-left font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td className="py-4 text-center" colSpan={4}>
                <div className="flex justify-center items-center">
                  <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" />
                </div>
              </td>
            </tr>
          ) : educations.length > 0 ? (
            educations.map((eucation: any) => (
              <tr
                key={eucation._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-2 px-4">
                  <img
                    alt={eucation?.name}
                    className="w-16 h-16 object-cover rounded-md"
                    src={eucation?.logoUrl || "/placeholder.png"}
                  />
                </td>
                <td className="py-2 px-4">{eucation.company}</td>
                <td className="py-2 px-4">{eucation?.position}</td>
                <td className="py-2 px-4 mt-3 flex space-x-2">
                  <Link href={`/dashboard/experience/${eucation?._id}`}>
                    <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">
                      Update
                    </button>
                  </Link>
                  <button
                    className={`bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 ${
                      deletingId === eucation._id
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={deletingId === eucation._id}
                    onClick={() => handleDelete(eucation._id)}
                  >
                    {deletingId === eucation._id ? "Deleting..." : "Delete"}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="py-4 text-center" colSpan={4}>
                No education found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EducationTable;
