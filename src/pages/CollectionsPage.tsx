type CollectionsPageProps = {
  collection: string
}

export default function CollectionsPage({ collection }: CollectionsPageProps) {
  return <div>Collections ${collection}</div>
}
