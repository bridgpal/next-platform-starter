import MarkdownToJsx from 'markdown-to-jsx';
import { CodeBlock } from './code-block';
import { buildNetlifyImageUrl } from 'utils';

export function Markdown({ content }) {
    const HighlightedCodeBlock = ({ children }) => {
        const { props } = children;
        const matchLanguage = /lang-(\w+)/.exec(props?.className || '');
        return <CodeBlock code={props?.children} lang={matchLanguage ? matchLanguage[1] : undefined} title={props?.title} />;
    };
    const OptimizedImage = ({ src, alt, ...rest }) => <img src={buildNetlifyImageUrl(src)} alt={alt || ''} {...rest} />;

    return (
        <MarkdownToJsx
            className="markdown"
            options={{
                overrides: {
                    pre: HighlightedCodeBlock,
                    img: OptimizedImage
                }
            }}
        >
            {content}
        </MarkdownToJsx>
    );
}
