// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { ContentSerializer, KernelProvider } from './notebookProvider';

// This method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  
  context.subscriptions.push(
    vscode.notebook.registerNotebookSerializer(
      'git-book', new ContentSerializer()
    ),
    vscode.notebook.registerNotebookKernelProvider(
      { viewType: 'git-book'},
      new KernelProvider(),
    ),
  );
  
}

// This method is called when your extension is deactivated
export function deactivate() { }
