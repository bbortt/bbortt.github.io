// @flow
import React, {Component} from 'react';

type Props = { /* ... */ };

export const Talks: Component<Props> = () => (
  <div className="talks">
    <h2>Talks.&nbsp;
      <small className="text-muted">What I try to put back into the world.</small>
    </h2>

    <br/>

    <h3>2025</h3>
    <h4><i>Devoxx Marokko</i>: Practical API Testing with OpenAPI and Citrus Framework</h4>

    <p>
      This session demonstrates how the Citrus Framework and Citrus Simulator elevate OpenAPI-based testing by
      generating test clients and realistic simulations directly from specifications.
      Attendees will learn to improve test quality, validate schemas, and enhance team collaboration, streamlining
      integration and paving the way for contract testing in continuous integration environments.
    </p>

    <ul>
      <li>
        <a
          href="https://m.devoxx.com/events/dvma25/talks/11165/practical-api-testing-with-openapi-and-citrus-framework"
          download className="text-underline">Talk</a>
      </li>
    </ul>

    <h4><i>Devoxx Belgium</i>: Practical API Testing with OpenAPI and Citrus Framework</h4>

    <p>
      This session demonstrates how the Citrus Framework and Citrus Simulator elevate OpenAPI-based testing by
      generating test clients and realistic simulations directly from specifications.
      Attendees will learn to improve test quality, validate schemas, and enhance team collaboration, streamlining
      integration and paving the way for contract testing in continuous integration environments.
    </p>

    <ul>
      <li>
        <a
          href="https://m.devoxx.com/events/dvbe25/talks/19146/practical-api-testing-with-openapi-and-citrus-framework"
          download className="text-underline">Talk</a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/watch?v=cvEd8PHXY3U"
          download className="text-underline">Recording</a>
      </li>
    </ul>

    <h3>2020</h3>
    <h4><i>DevOps FUSION</i>: Wie wir Postomaten mit Kubernetes und Zitronensaft testen</h4>
  </div>
);

export default Talks;
