import { Id } from "../convex/_generated/dataModel";

export type Event = {
    title: string;
    description: string;
    date: string;
    lon: number;
    lat: number;
    startTime: string;
    endTime: string;
    organizer: Id<"users">;
    attendees: number;
    isCompleted: boolean;
    id: Id<"events">;
    createdAt: Date;
    updatedAt: Date;
}


export type NewEvent = Omit<Event, "id" | "createdAt" | "updatedAt">;