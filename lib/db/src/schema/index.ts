import { pgTable, serial, integer, timestamp } from "drizzle-orm/pg-core";

export const siteStats = pgTable("site_stats", {
  id: serial("id").primaryKey(),
  totalVisits: integer("total_visits").notNull().default(0),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type SiteStats = typeof siteStats.$inferSelect;
