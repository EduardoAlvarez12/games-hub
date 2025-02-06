import { Card, Skeleton } from "@chakra-ui/react"
import { SkeletonText } from "@/components/ui/skeleton"

const GameCardSkeleton = () => {
  return (
    <Card.Root variant={"subtle"} width={{base:'320px', md:'320px', lg:'300px', xl:"250px"}} borderRadius={10} overflow={"hidden"}>
        <Skeleton height={'180px'}/>
        <Card.Body>
            <SkeletonText/>
        </Card.Body>
    </Card.Root>
  )
}

export default GameCardSkeleton