import { Router, type IRouter } from "express";
import { db, siteStats } from "@workspace/db";
import { eq, sql } from "drizzle-orm";

const router: IRouter = Router();

router.post("/visitors", async (req, res) => {
  try {
    const existing = await db.select().from(siteStats).where(eq(siteStats.id, 1)).limit(1);

    let newCount: number;
    if (existing.length === 0) {
      const inserted = await db.insert(siteStats).values({ id: 1, totalVisits: 1 }).returning();
      newCount = inserted[0]!.totalVisits;
    } else {
      const updated = await db
        .update(siteStats)
        .set({ totalVisits: sql`${siteStats.totalVisits} + 1`, updatedAt: new Date() })
        .where(eq(siteStats.id, 1))
        .returning();
      newCount = updated[0]!.totalVisits;
    }

    res.json({ count: newCount });
  } catch (err) {
    req.log.error({ err }, "Failed to increment visitor count");
    res.status(500).json({ error: "Failed to update visitor count" });
  }
});

router.get("/visitors", async (req, res) => {
  try {
    const rows = await db.select().from(siteStats).where(eq(siteStats.id, 1)).limit(1);
    const count = rows[0]?.totalVisits ?? 0;
    res.json({ count });
  } catch (err) {
    req.log.error({ err }, "Failed to fetch visitor count");
    res.status(500).json({ error: "Failed to fetch visitor count" });
  }
});

export default router;
