import StyleWrapper from '../../component/StyleWrapper'
import DisplayListOfPlatforms from './DisplayListOfPlatforms'
import ListOfContracts from './ListOfContracts'

export default function DisplayContractRequirements() {
  return (
    <StyleWrapper className='text-blue-900'>
      <div className='py-8'>
        <h2 className='py-4 font-Poppins text-3xl font-bold'>Requirements for Contract</h2>
        <ListOfContracts />
      </div>
      <div>
        <h2 className='py-4 font-Poppins text-3xl font-bold'>Platform To Use</h2>
        <DisplayListOfPlatforms />
      </div>
    </StyleWrapper>
  )
}
