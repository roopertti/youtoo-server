CREATE TABLE "public"."Room" (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  ref VARCHAR(8) UNIQUE NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW(),
  "lastActive" TIMESTAMP
);

CREATE TABLE "public"."User" (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  ref VARCHAR(4) UNIQUE NOT NULL,
  name VARCHAR(10) NOT NULL,
  "roomId" BIGINT UNIQUE NOT NULL,
  joined TIMESTAMP NOT NULL DEFAULT NOW(),
  FOREIGN KEY ("roomId") REFERENCES "public"."Room"(id)
);

CREATE TYPE message_type AS ENUM ('system:info', 'system:success', 'system:warn', 'user:message');

CREATE TABLE "public"."Message" (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  "userId" BIGINT,
  "roomId" BIGINT NOT NULL,
  type message_type, 
  content TEXT NOT NULL,
  "sentAt" TIMESTAMP NOT NULL DEFAULT NOW(),
  FOREIGN KEY ("userId") REFERENCES "public"."User"(id),
  FOREIGN KEY ("roomId") REFERENCES "public"."Room"(id)
);