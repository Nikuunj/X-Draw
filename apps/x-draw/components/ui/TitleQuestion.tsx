import GradienText from "./GradienText";

function TitleQuestion({ startNormalText, midNormalText, lastNormalText, midColorText, startColorText, lastColorText }: 
     { startNormalText: string; midNormalText?: string; lastColorText?: string; midColorText?: string; startColorText?: string; lastNormalText?: string }) {
     return (
          <p
               className={"text-3xl sm:text-4xl md:text-5xl font-bold text-balance text-center"}>
               {startColorText && <>
                    <GradienText text={startColorText} /> 
                    {' '}
               </>}
               {startNormalText}
               {midColorText && <>
                    {' '}
                    <GradienText text={midColorText} /> 
                    {' '}
               </>}
               {midNormalText && <>{' '}{midNormalText}{' '}</> }

               {lastColorText && <>
                    {' '}
                    <GradienText text={lastColorText} /> 
                    {' '}
               </>}
               {lastNormalText && <>{' '}{lastNormalText}</> }
          </p>
  )
}

export default TitleQuestion