"use client";

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react"; 
import ExperienceTable from "../../../../components/Dashboard/ExperienceTable";
import { useGetAllJourney } from "../../../../hooks/journey.hook";

const ManageCategory = () => {
  const { data, isPending } = useGetAllJourney();
  const [experience, setExperience] = useState<any[]>([]);

  useEffect(() => {
    if (data?.data) {
      // Filter data where type is 'experience'
      const filteredExperience = data.data.filter((item: any) => item.type === 'experience');
      setExperience(filteredExperience);
    }
  }, [data]);

  return (
    <div className="lg:ml-4">
      <h3 className="text-2xl font-bold mb-4 text-center">My Experience</h3>
      <Link className="flex justify-end" href="/admin/create-category">
        <Button className="mb-4" color="success">
          Create Experience
        </Button>
      </Link>
      <ExperienceTable
        experiences={experience}
        isLoading={isPending}
        setExperiences={setExperience}
      />
    </div>
  );
};

export default ManageCategory;
