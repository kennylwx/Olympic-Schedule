import Image from "next/image";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { nanoid } from "nanoid";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const testStr = process.env.TEST_STR;

  const olympicsList = [
    {
      id: nanoid(),
      year: 2028,
      city: "Los Angeles",
      country: "United States",
      gameType: "Summer",
    },
    {
      id: nanoid(),
      year: 2024,
      city: "Paris",
      country: "France",
      gameType: "Summer",
    },
    {
      id: nanoid(),
      year: 2020,
      city: "Tokyo",
      country: "Japan",
      gameType: "Summer",
    },
    {
      id: nanoid(),
      year: 2016,
      city: "Rio de Janeiro",
      country: "Brazil",
      gameType: "Summer",
    },
    {
      id: nanoid(),
      year: 2014,
      city: "Sochi",
      country: "Russia",
      gameType: "Winter",
    },
    {
      id: nanoid(),
      year: 2018,
      city: "P'yŏngch'ang",
      country: "South Korea",
      gameType: "Winter",
    },
    {
      id: nanoid(),
      year: 2022,
      city: "Beijing",
      country: "China",
      gameType: "Winter",
    },
    {
      id: 1,
      year: 2026,
      city: "Milan and Cortina d'Ampezzo",
      country: "Italy",
      gameType: "Winter",
    },
  ];

  const currentYear = new Date().getFullYear();
  const findClosestYear = (a: { year: number }, b: { year: number }) =>
    Math.abs(a.year - currentYear) - Math.abs(b.year - currentYear);
  const closestOlympics = olympicsList
    .sort(findClosestYear)
    .find((olympics) => true);

  return (
    <>
      <Head>
        <title>Olympics Schedule</title>
      </Head>
      <main>
        <div className="bg-yellow-500 w-full px-2 py-2">
          <div className="bg-green-500 flex justify-between max-w-5xl mx-auto">
            <Select>
              <SelectTrigger className="w-[240px]">
                <SelectValue placeholder="Olympics" defaultValue={1} />
              </SelectTrigger>
              <SelectContent>
                {olympicsList
                  .sort((a, b) => b.year - a.year)
                  .map((olympics) => (
                    <SelectItem
                      key={olympics.id}
                      value={olympics.id}
                      className="flex items-center align cursor-pointer px-2"
                    >
                      {`${olympics.city}, ${olympics.year}, ${olympics.gameType}`}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
            <Button>Saved</Button>
          </div>
        </div>
      </main>
    </>
  );
}
