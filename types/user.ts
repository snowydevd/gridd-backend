import { Id } from "../convex/_generated/dataModel";

export type User = {
    id: Id<"users">;
    name: string;
    email: string;
    image: string;
    isPublisher: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export type NewUser = Omit<User, "id" | "createdAt" | "updatedAt">;