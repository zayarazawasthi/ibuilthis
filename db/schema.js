"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
// ============= PRODUCTS =============
exports.products = (0, pg_core_1.pgTable)("products", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    // Core product info
    name: (0, pg_core_1.varchar)("name", { length: 120 }).notNull(),
    slug: (0, pg_core_1.varchar)("slug", { length: 140 }).notNull(),
    tagline: (0, pg_core_1.varchar)("tagline", { length: 200 }),
    description: (0, pg_core_1.text)("description"),
    // Links & media
    websiteUrl: (0, pg_core_1.text)("website_url"),
    tags: (0, pg_core_1.json)("tags").$type(), // e.g. ["AI", "Productivity"]
    // Voting
    voteCount: (0, pg_core_1.integer)("vote_count").notNull().default(0),
    // Metadata
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true }).defaultNow(),
    approvedAt: (0, pg_core_1.timestamp)("approved_at", { withTimezone: true }),
    status: (0, pg_core_1.varchar)("status", { length: 20 }).default("pending"), // pending | approved | rejected
    submittedBy: (0, pg_core_1.varchar)("submitted_by", { length: 120 }).default("anonymous"),
    userId: (0, pg_core_1.varchar)("user_id", { length: 255 }), // Clerk user ID
    // Organization reference (for backend queries only)
    organizationId: (0, pg_core_1.varchar)("organization_id", { length: 255 }), // Clerk org ID
}, function (table) { return ({
    slugIdx: (0, pg_core_1.uniqueIndex)("products_slug_idx").on(table.slug),
    statusIdx: (0, pg_core_1.index)("products_status_idx").on(table.status),
    organizationIdx: (0, pg_core_1.index)("products_organization_idx").on(table.organizationId),
}); });
