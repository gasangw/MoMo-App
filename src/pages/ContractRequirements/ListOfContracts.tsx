import MarkIcon from '../../assets/MarkIcon'

const listStyle = 'flex items-center gap-2 py-2 font-Assistant text-sm'

export default function ListOfContracts() {
  return (
    <div className='flex flex-wrap gap-5 md:justify-around'>
      <div>
        <h5 className='text-xl font-medium'>Aggregator</h5>
        <ul className='pl-3'>
          <li className={listStyle}>
            <MarkIcon />
            <span>RDB Certificate</span>
          </li>
          <li className={listStyle}>
            <MarkIcon />
            <span>PSP License</span>
          </li>
        </ul>
      </div>

      <div>
        <h5 className='text-xl font-medium'>E-Commerce</h5>
        <ul className='pl-3'>
          <li className={listStyle}>
            <MarkIcon />
            <span>RDB Certificate</span>
          </li>
        </ul>
      </div>

      <div>
        <h5 className='text-xl font-medium'>NGOs/Churches</h5>
        <ul className='pl-3'>
          <li className={listStyle}>
            <MarkIcon />
            <span>RDB Certificate</span>
          </li>
        </ul>
      </div>

      <div>
        <h5 className='text-xl font-medium'>Other Companies/Org</h5>
        <ul className='pl-3'>
          <li className={listStyle}>
            <MarkIcon />
            <span>Operating License</span>
          </li>
          <li className={listStyle}>
            <MarkIcon />
            <span>RDB Certificate</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
