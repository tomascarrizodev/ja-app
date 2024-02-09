import Feature from "./Feature"

const Features = () => {

  const feature = [
    {
      id: 1,
      content: 'Easy to make and share',
      src: '/img/pattern-1.png',
      direction: ''
    },
    {
      id: 2,
      content: 'Jä adapts to you and you to Jä',
      src: '/img/pattern-5.png',
      direction: 'flex-row-reverse'
    },
    {
      id: 3,
      content: 'Create your personal sections',
      src: '/img/pattern-3.png',
      direction: ''
    },
    {
      id: 4,
      content: 'Download a formatted PDF',
      src: '/img/pattern-4.png',
      direction: 'flex-row-reverse'
    },
  ]

  return (
    <>
      <div className="py-14 flex flex-col gap-6">
        {
          feature.map(fea => {
            return <Feature key={fea.id} content={fea.content} src={fea.src} direction={fea.direction} />
          })
        }
      </div>
    </>
  )
}

export default Features