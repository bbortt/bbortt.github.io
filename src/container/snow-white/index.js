// @flow
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './snow-white.scss';

type Props = { /* ... */ };

export const SnowWhite: Component<Props> = () => (
  <div className="snow-white">
    <h2>Snow-White.&nbsp;
      <small className="text-muted">Which API endpoints are your tests actually exercising?</small>
    </h2>

    <p>
      Snow-White links your OpenAPI specification with your OpenTelemetry traces, so you can see exactly which
      endpoints, parameters, and responses are actually exercised by your tests or production traffic &mdash;
      without changing a line of application code.
    </p>

    <p>
      When both the code and the tests are AI-generated, a passing test suite no longer proves the two agree on
      the API contract. Snow-White is meant to be that independent, <strong>ground-truth guardrail</strong>.
    </p>

    <h3>Key features</h3>
    <ul>
      <li>Coverage dashboards for endpoints, parameters, and responses.</li>
      <li>Automated quality gates in CI/CD &mdash; the CLI fails builds when coverage regresses.</li>
      <li>Cloud-native: single Helm install, event-driven microservices on Kafka, built for Kubernetes.</li>
      <li>
        OpenTelemetry-native &mdash; no proprietary SDK. Spring Boot autoconfiguration and an OpenAPI Generator
        plugin wire up the linking attributes automatically.
      </li>
      <li>
        Agentic development support: an <code>--agentic</code> CLI mode emits a JSON summary of under-covered
        paths and parameters, meant to feed directly into AI coding agents, paired with a Claude Code skill.
      </li>
    </ul>

    <h3>How it works</h3>
    <p>
      Sync your OpenAPI specs, ingest OpenTelemetry traces, correlate them by service and API name/version, gate
      on coverage thresholds, and visualize the result &mdash; five steps from spec to signal.
    </p>

    <p>
      I talked about the ideas behind this at Devoxx Belgium and Devoxx Marokko in 2025 &mdash; see
      my <Link to="/talks">talks</Link> for the recording and slides.
    </p>

    <div className="snow-white-actions">
      <a className="btn btn-primary" href="https://timon-borter.ch/snow-white/">Full documentation</a>
      <a className="btn btn-outline-secondary" href="https://github.com/bbortt/snow-white">View on GitHub</a>
    </div>
  </div>
);

export default SnowWhite;
