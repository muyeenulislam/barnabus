import React from "react";
import { SolidTags } from "@/components/tags";

const buildTagMap = (list) => {
  const map = Object.create(null);
  for (const t of list || []) map[t.name] = t;
  return map;
};

const TagChips = React.memo(function TagChips({
  tags = [],
  tagMap,
  responsive = true,
  size = "M",
}) {
  if (!tags?.length) return null;
  return (
    <div className="flex gap-1 flex-wrap">
      {tags?.map((name, idx) => {
        const t = tagMap[name];
        if (!t) return null;
        if (responsive) {
          return (
            <React.Fragment key={`${name}-${idx}`}>
              <SolidTags
                size="S"
                variant={t.accent}
                label={t.name}
                additionalStyle="md:!hidden"
              />
              <SolidTags
                size="M"
                variant={t.accent}
                label={t.name}
                additionalStyle="!hidden md:!inline-flex"
              />
            </React.Fragment>
          );
        }
        return (
          <SolidTags
            key={`${name}-${idx}`}
            size={size}
            variant={t.accent}
            label={t.name}
          />
        );
      })}
    </div>
  );
});

export { TagChips, buildTagMap };
