import {defineSchema, defineTable} from "convex/server";
import {v} from "convex/values";


export default defineSchema({
    events: defineTable({
        title: v.string(),
        description: v.string(),
        date: v.string(),
        lon: v.number(),
        lat: v.number(),

    }).index("by_id", ["id"]),
});

