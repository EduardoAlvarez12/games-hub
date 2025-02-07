import { Card, Skeleton } from "@chakra-ui/react"
import { SkeletonText } from "@/components/ui/skeleton"

const GameCardSkeleton = () => {
  return (
    <Card.Root variant={"subtle"}>
        <Skeleton height={'180px'}/>
        <Card.Body>
            <SkeletonText/>
        </Card.Body>
    </Card.Root>
  )
}

export default GameCardSkeleton