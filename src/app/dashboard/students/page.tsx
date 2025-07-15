import { DataTable } from "@/components/basic-data-table";

const students = [
  {
    id: 1,
    name: "Kutullo",
    email: "kutullo@example.com",
    location: "Ga-Rankuwa",
  },
  {
    id: 2,
    name: "Alicia",
    email: "alicia@example.com",
    location: "Ga-Rankuwa",
  },
  { id: 3, name: "John", email: "john@example.com", location: "Limpopo" },
  { id: 4, name: "Zanele", email: "zanele@example.com", location: "Pretoria" },
  { id: 5, name: "Thabo", email: "thabo@example.com", location: "KZN" },
  { id: 6, name: "Nomsa", email: "nomsa@example.com", location: "Others" },
  { id: 7, name: "Peter", email: "peter@example.com", location: "Pretoria" },
  { id: 8, name: "Lerato", email: "lerato@example.com", location: "Limpopo" },
  { id: 9, name: "Mpho", email: "mpho@example.com", location: "Ga-Rankuwa" },
  { id: 10, name: "Sipho", email: "sipho@example.com", location: "KZN" },
  { id: 11, name: "Emily", email: "emily@example.com", location: "Others" },
  {
    id: 12,
    name: "Sibusiso",
    email: "sibusiso@example.com",
    location: "Limpopo",
  },
  { id: 13, name: "Nandi", email: "nandi@example.com", location: "KZN" },
  { id: 14, name: "Jabu", email: "jabu@example.com", location: "Ga-Rankuwa" },
  { id: 15, name: "Ashley", email: "ashley@example.com", location: "Pretoria" },
  { id: 16, name: "Karabo", email: "karabo@example.com", location: "Others" },
  {
    id: 17,
    name: "Boitumelo",
    email: "boitumelo@example.com",
    location: "KZN",
  },
  { id: 18, name: "Lucky", email: "lucky@example.com", location: "Pretoria" },
  { id: 19, name: "Palesa", email: "palesa@example.com", location: "Limpopo" },
  { id: 20, name: "Neo", email: "neo@example.com", location: "Ga-Rankuwa" },
];

function Students() {
  return (
    <div className="flex  w-full items-start justify-center bg-gray-100 dark:bg-gray-900">
      <DataTable
        columns={[
          { key: "id", header: "ID", sortable: true },
          { key: "name", header: "Name", filterable: true },
          { key: "email", header: "Email", filterable: true },
          {
            key: "location",
            header: "Location",
            filterable: true,
            sortable: true,
          },
        ]}
        data={students}
        searchable
        itemsPerPage={11}
      />
    </div>
  );
}

export default Students;
