import { useEffect } from 'react';

export function Comments(): JSX.Element {
  useEffect(() => {
    const script = document.createElement('script');
    const anchor = document.getElementById('inject-comments-for-uterances');

    script.setAttribute('async', 'true');
    script.setAttribute('issue-term', 'url');
    script.setAttribute('theme', 'photon-dark');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('repo', 'thiagomfl/prismic-blog');
    script.setAttribute('src', 'https://utteranc.es/client.js');

    anchor.appendChild(script);
  }, []);

  return <div id="inject-comments-for-uterances" />;
}
