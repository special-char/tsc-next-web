import cn from 'classnames';
import { forwardRef } from 'react';

interface Props {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'smallP'
    | 'largeP'
    | 'a'
    | 'bold'
    | 'italic'
    | 'blockquote'
    | 'title404'
    | 'btnText'
    | 'label';
  children: string | any;
  className?: any;
  href?: string;
  style?: Object;
  htmlFor?: string;
}

const variantsMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  smallP: 'p',
  largeP: 'p',
  btnText: 'p',
  a: 'a',
  bold: 'strong',
  italic: 'em',
  blockquote: 'blockquote',
  label: 'label',
  title404: 'h1',
};

const Typography = ({ variant, className, ...props }: Props, ref: any) => {
  const Component = (variant ? variantsMapping[variant] : 'p') as any;
  return (
    <>
      <Component
        className={cn({
          [`typography--class-${variant}`]: !!variant,
          [className]: !!className,
        })}
        ref={ref}
        {...props}
      />
      <style jsx>
        {`
          @import './styles/variables.scss';
          .commonHeading {
            font-family: $newsReaderFont;
            margin-top: 0;
            font-weight: bold;
          }
          .mb1rem {
            margin-bottom: 1rem;
          }
          .typography--class-h1 {
            margin-bottom: 1.5rem;
            color: $Neutral800;
            font-size: var(--fs-h1);
            line-height: 1.3em;
            font-family: $newsReaderFont;
          }
          .typography--class-h2 {
            color: $Neutral800;
            font-size: var(--fs-h2);
            line-height: 1.289em;
            font-family: $newsReaderFont;
          }
          .typography--class-h3 {
            color: $Neutral700;
            font-size: var(--fs-h3);
            line-height: 1.5em;
          }
          .typography--class-h4 {
            color: $Neutral700;
            font-size: var(--fs-h4);
            line-height: 1.5em;
          }
          .typography--class-h5 {
            color: $Neutral800;
            font-size: var(--fs-h5);
            line-height: 1.444em;
          }
          .typography--class-h6 {
            margin-bottom: 0.6rem;
            color: $Neutral800;
            font-size: var(--fs-h6);
            line-height: 1.5em;
          }
          .typography--class-smallP {
            font-size: var(--fs-smallP);
            line-height: 1.6em;
          }
          .typography--class-largeP {
            font-size: var(--fs-largeP);
            line-height: 1.583em;
          }
          .typography--class-a {
            -webkit-transition: color 300ms ease;
            transition: color 300ms ease;
            color: $Primary1;
            text-decoration: underline;
            background-color: transparent;
            cursor: pointer;
          }
          .typography--class-a:hover,
          .typography--class-a:focus {
            color: $Secondary3;
            outline: 0;
          }
          .typography--class-bold {
            color: $Neutral800;
            font-weight: 700;
          }
          .typography--class-blockquote {
            margin: 0 0 0.625rem 0;
            padding: 4.4rem 4.8rem 4.4rem 7.8rem;
            border-left: 11px solid $Secondary3;
            border-radius: 10px 20px 20px 10px;
            background-color: $Neutral100;
            box-shadow: 0 5px 15px 0 rgb(30 61 96 / 3%);
            font-size: var(--fs-blockquote);
            line-height: 1.583em;
          }
          .typography--class-label {
            display: block;
            margin-bottom: 1rem;
            color: $Neutral700;
            line-height: 1.111em;
            font-weight: 700;
          }
          .typography--class-btnText {
            font-size: var(--fs-btnText);
            line-height: 1.125em;
            text-transform: uppercase;
            font-weight: 700;
            margin: 0;
            letter-spacing: 0.08em;
            font-family: sans-serif;
          }
          .typography--class-title404 {
            color: $Neutral800;
            font-size: var(--fs-title404);
            line-height: 1em;
            font-weight: 600;
            text-align: right;
            margin: 0;
          }
          @media screen and (max-width: $breakpointLgForMw) {
            .typography--class-h1 {
              margin-bottom: 1.25rem;
            }
            .typography--class-h2 {
              margin-bottom: 1.25rem;
            }
            .typography--class-blockquote {
              padding: 3.6rem 4rem;
            }
          }
          @media screen and (max-width: $breakpointMdForMw) {
            .typography--class-h1 {
              margin-bottom: 1rem;
            }
            .typography--class-h2 {
              margin-bottom: 1rem;
            }
            .typography--class-largeP {
              line-height: 2em;
            }
            .typography--class-blockquote {
              padding: 3rem 3.2rem;
            }
          }
          @media screen and (max-width: $breakpointSmForMw) {
            .typography--class-h1 {
              margin-bottom: 0.6rem;
            }
            .typography--class-h2 {
              margin-bottom: 0.6rem;
            }
            .typography--class-blockquote {
              padding: 2.5rem 1.25rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default forwardRef(Typography);
